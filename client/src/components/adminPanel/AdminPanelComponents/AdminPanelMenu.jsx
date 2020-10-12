import React from "react";
import { withAuthRedirect } from "../../../Hoc/withRedirect";
import AdminActionMenu from "./AdminActionMenu";
import WorkSpacePreview from "./adminWorkSpace/WorkSpacePreview";

const AdminPanelMenu = (props) => {
  return (
    <div className="wrapper panelGrid">
      <AdminActionMenu logout={props.logout} />
      <div className="workSpace">
        <WorkSpacePreview
          works={props.works}
          images={props.images}
          articles={props.articles}
          articleImages={props.articleImages}
          loading={props.loading}
        />
      </div>
    </div>
  );
};

export default withAuthRedirect(AdminPanelMenu);
