//Confirmation dialog component
import { ReactComponent as Close } from "../assets/close.svg";
const Dialog = ({ title, subtitle, confirm, cancel, close }) => {
  return (
    <div className="dialog">
      <button className="dialogCloseBtn" onClick={close}>
        {/* <img src={require('../assets/close.svg')}/> */}
        <Close />
      </button>
      <div className="dialogContent">
        <div>{title}</div>
        <div className="dialogSubtitle">{subtitle}</div>
      </div>
      <div className="dialogBtns">
        <button className="confirmDialogBtn" onClick={confirm}>
          Confirm
        </button>
        <button className="cancelDialogBtn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Dialog;
