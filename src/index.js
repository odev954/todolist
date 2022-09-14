function main()
{
    let container = document.getElementById('test');
    let btn = TaskStatusButton().render(
        {
            ongoing: ["status","negative", "text"],
            done: ["status","positive", "text"],
        }
    )
    container.append(btn);
}

main()