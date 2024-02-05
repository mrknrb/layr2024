export default function BackPanel() {
    let gridcss = `
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        gap: 1px; /* Adjust the gap between grid items as needed */
        height: 100vh;
    `
    let a = ` grid-row-start: 4;
  grid-column-start: 5;
  grid-row-end:34;
  grid-column-end: 40; /* Ending at column 9, as column indices are 0-based */
  background-color: #3498db; /* Optional: Change the background color */
  color: #fff; /* Optional: Change the text color */`
    return (
        <>
            <div class="mrkDefault flex-row  bg-gray-400"
                 style={gridcss}>
                <div style={a}>Content</div>
            </div>
        </>
    )
}
