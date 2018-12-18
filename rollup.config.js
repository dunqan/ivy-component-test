
export default {
    input: './build/src/index.js',
    output: {
        name: 'ivy-app',
        file: 'dist/ivy-app.js',
        format: 'cjs',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
        }
    }
}
