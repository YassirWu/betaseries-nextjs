import React from 'react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </>,
      ],
    };
  }
}

export default MyDocument;
