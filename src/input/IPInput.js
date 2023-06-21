
function IPInput({ onSubmit }) {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h2>Search Details of any IP Address</h2>
            <input type="text" id="searchInput" style={{
                borderRadius: '4px',
                width: '400px',
                textAlign: 'center',
                height: '36px'
            }}></input><br />
            <button style={{
                backgroundColor: '#33F9FF',
                borderRadius: '8px',
                borderWidth: 0,
                padding: '8px 16px',
                margin: '16px 0',
                fontWeight: 'bold'
            }} onClick={() => {
                onClick(document.getElementById('searchInput'), onSubmit)
            }
            }>Submit</button>
        </div>
    )
}

export default IPInput;

function onClick(input, onSubmit) {
    const value = input.value;
    if (value && value.trim() !== '') {
        onSubmit(value);
    }
}