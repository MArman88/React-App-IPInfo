import './IPView.css'

function IPView({ ipInfo }) {
    let arr = []
    let index = 0
    for (const prop in ipInfo) {
        arr.push(<IPViewData key={index} label={prop} data={ipInfo[prop]}></IPViewData>);
        index += 1;
    }
    return (
        <div>
            {arr.map((item) => item)}
        </div>
    );
}

export default IPView;

const styles = {
    value: { color: '#091853', textAlign: 'right' },
    label: { color: '#09185380', textAlign: 'left' },
}

function IPViewData(props) {
    return (
        // <div style={{
        //     width: '100%',
        //     backgroundColor: 'red'
        // }}><label style={styles.label}>{props.label.toUpperCase()}</label>  <label style={styles.value}>{props.data}</label></div>
        <div className="flex-container">
            <div style={styles.label}>
                {props.label.toUpperCase()}
            </div>
            <div style={styles.value}>
                {props.data}
            </div>
        </div>
    );
}
