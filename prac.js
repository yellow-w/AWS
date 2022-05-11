const View = ({ views }) => {
    return (
        <ul>
            {views.map((view) => {
                <li key={view.idx}>
                    <Link href={`/board/view/${encodeURIComponent(view.idx)}`}>
                    </Link>
                </li>
            })}
        </ul>
    )
}
export default View;
