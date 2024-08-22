import './ProButton.css';

function ProButton() {
    return (
        <button className="button">
            <span className="actual-text"> &nbsp;Hello World&nbsp;</span>
            <span aria-hidden="true" className="hover-text"> &nbsp;Hello World&nbsp;</span>
        </button>
    );
}

export default ProButton;