import "./style.scss";

const HeadContents = (props) => {
    const {headTitle, headerIcon} = props;

    return (
        <div className="head-wrapper">
            <h2>{headTitle}</h2>
            <span>{headerIcon}</span>
        </div>
    );
};

export default HeadContents;

