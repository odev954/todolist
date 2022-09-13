function main()
{
    let container = document.getElementById('test');
    let btn = TaskStatusButton().render(
        {
            ongoing: ["mono"],
            done: ["mini"]
        }
    )
    container.append(btn);
}

main()