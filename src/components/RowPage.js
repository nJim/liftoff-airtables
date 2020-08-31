import React from "react";
import PropTypes from "prop-types";

import Row from "./Row";
import LinkOrAnchor from "./LinkOrAnchor";
import Header from "./Header";
import getFieldsToDisplay from "../utils/getFieldsToDisplay";
import getBannerUrl from "../utils/getBannerUrl";

const RowPage = ({ rowData }) => {
  let url = getBannerUrl(rowData.fields);
  console.log(url);
  return (
    <div className="row-page" style={{ backgroundImage: "url(" + url + ")" }}>
      <div className="layout-inner">
        <LinkOrAnchor className="nav-button" to="/">
          Back
        </LinkOrAnchor>
        <Row
          fieldsToDisplay={getFieldsToDisplay(process.env.FIELD_ORDER)}
          rowData={rowData}
        />
        <LinkOrAnchor className="nav-button" to="/">
          Back
        </LinkOrAnchor>
      </div>
    </div>
  );
};

RowPage.propTypes = {
  rowData: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
export default RowPage;
