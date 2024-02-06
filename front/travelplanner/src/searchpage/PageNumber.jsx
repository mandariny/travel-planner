import classes from './PageNumber.module.css'

const PageNumber = (props) => {
    const pageNumbers = [];
    for(let i = props.startNum; i <= props.endNum; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {
                pageNumbers.map(number => (
                    <div key={number} onClick={() => {window.alert(number)}} className={[classes.button, `${props.nowNum == number && classes.button_clicked}`].join(" ")}>{number}</div>
                ))
            }
        </>
    )
}

export default PageNumber