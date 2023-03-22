import React, { useContext } from "react";
import ReactHtmlParser from "react-html-parser";
import { CanvasContext, ICanvasComponent } from "../CanvasContainer";

const TableElement = (props: ICanvasComponent) => {
  const { content, id, isReadOnly, dimension } = props;
  const { actions } = useContext(CanvasContext);
  const editorRef = React.useRef(null);

  const updateEditorValue = (value: string) => {
    actions?.updateCanvasData({ id, content: value });
  };


  return (
    <>
      <table className={'table'}>
        <thead>
          <tr>
            <th>
              id
            </th>
            <th>
              name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13</td>
            <td>Mike</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableElement;
