import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import generatePackageJson from 'rollup-plugin-generate-package-json'
import path from 'path';
	

export default {
	input: path.resolve(__dirname, './src/Api.tsx'),
    output: [{
		file: path.resolve(__dirname, './dist/bundles/bundle.js'),
        format: 'cjs',
        sourcemap: true
    },{
		file: path.resolve(__dirname, './dist/es/bundle.js'),
        format: 'es',
        sourcemap: true
    }],
    external: [
        'react',
        'react-dom',
        'axios',
        "@material-ui/core", 
        "@material-ui/icons",
        "@material-ui/lab",
        "@material-ui/utils", 
        'formik'
    ],
    plugins: [
        resolve({ extensions: ['.jsx', '.js', '.ts', '.tsx'] }),
        typescript({
            tsconfig: "tsconfig.json",
            objectHashIgnoreUnknownHack: true,
            tsconfigOverride: {
                compilerOptions: { 
                    declaration: true
                } 
            }
        }),
        commonjs(),
        babel({
            extensions: ['.jsx', '.js', '.tsx'], 
            exclude: 'node_modules/**'
        }),
        generatePackageJson({
            outputFolder: 'dist',
            baseContents: (pkg) => ({
                name: pkg.name,
				version: "0.0.1-pre-alpha.0",
                main: 'bundles/bundle.js',
                module: 'es/bundle.js',
                typings: 'bundles/Api.d.ts',
                peerDependencies: {
                    "react": "^16.12.0",
					"@types/react": "^16.9.16",
                    "react-dom": "^16.12.0",
                    "@material-ui/core": "^4.7.2",
                    "@material-ui/lab": "^4.0.0-alpha.37",
                    "axios": "^0.19.0",
                    "formik": "^2.0.8",
                    "mobx": "^5.15.1",
                    "mobx-react": "^6.1.4",
					"react-router": "^5.1.2",
					"@types/react-router": "^5.1.3",
					"react-router-dom": "^5.1.2",
					"@types/react-router-dom": "^5.1.3"
                }
            })            
        })
    ]
};
