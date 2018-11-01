import React from "react";
import { withRouter } from "next/router";
import Page from "components/blog/Page";
import PagePreview from "components/blog/PagePreview";
import { formatDate } from "utils/date";

import CONFIG from "blog/dist/index.json";
import SUMMARY_JSON from "blog/dist/summary.json";

function Index(props) {
  let pageJson = {};
  if (props.router.query) {
    if (props.router.query.fullUrl) {
      pageJson = require(`../../blog/dist${props.router.query.fullUrl}.json`);
    }
  }

  return (
    <div>
      <style jsx global>{`
        .content a {
          color: #0365a5;
          text-decoration: none;
          border-bottom: 1px solid #dfdfdf;
          transition: all 300ms ease;
        }
        a:hover,
        a:focus {
          border-bottom-color: currentColor;
        }
        code {
          background-color: #eee;
          line-height: 1;
          border-radius: 2px;
          padding: 1px;
        }
        code:not(.hljs) {
          border: 1px solid #ddd;
        }
      `}</style>
      <Page
        siteTitle={`${CONFIG.siteTitle} - ${pageJson.title}`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        body={Body(pageJson)}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  );
}

function Body(props) {
  return (
    <div className="content center mw6 pa3 pa4-ns">
      <h1 className="mt0 lh-title">{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.bodyHtml }} />
    </div>
  );
}

export default withRouter(Index);
