import Document from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p, h1, h2 {
    color: #231f20;
    font-weight: 400;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  h1 {
    font-family: 'Oleo Script', cursive;
    font-size: 1.5rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    text-decoration: none;
    color: #00376b;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
