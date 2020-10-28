import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }: any) {
        // returns an object like: { html, head, errorHtml, chunks, styles }     
        return renderPage();
    }

    render() {
        return (
            <Html>
                <Head />
                <body className="bg-grey-lighter h-screen font-sans">
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}