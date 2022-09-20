function main()
{
    //localStorage.clear();
    let container = document.getElementById('test');
    let menu = document.getElementById('menu');
    //let test1 = Task('testing this shit', 'test1', new Date(Date.now()));
    //let test2 = Task('testing this shit', 'test2', new Date(Date.now()));
    //let test3 = Task('testing this shit', 'test3', new Date(Date.now()));
    let list = TaskList();
    let ins = InsertButton(container, list);
    let rmv = RemoveButton(container, list);
    let fltr = FilterButton(container, list);
    let delall = DeleteButton(container, list);
    let delcomp = DeleteButton(container, list, true);
    container.append(list.render(['cards-grid']));
    
    //list.add(test1);
    //list.add(test2);
    //let element = list.add(test3);
    
    
    //container.append(element);
    menu.append(ins.render([]));
    menu.append(rmv.render([]));
    menu.append(fltr.render([]));
    menu.append(delall.render([]));
    menu.append(delcomp.render([]));
    
    ins.components.button.addEventListener('click', () => rmv.setupClickEvents());
}

main()