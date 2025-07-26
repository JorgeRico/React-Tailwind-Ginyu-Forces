type Character = {
    id       : string,
    name     : string,
    head_img : string
}

interface SmallBoxProps {
    item : Character;
}

function SmallBox({ item }: SmallBoxProps) { 
    // changes are applied on CenterList component item
    const handleClick = () => {
        // Hide all elements with data-id attribute
        document.querySelectorAll('[data-id]').forEach(elem => {
            // reset div extra classes
            const element = elem?.querySelector(`div`);
            element?.classList.remove("max-w-96");
            element?.classList.remove("max-h-60");
            element?.classList.remove("max-h-0");
            element?.classList.remove("max-w-0");
            element?.classList.remove("border-emerald-600");
            element?.classList.remove("border-t-3");
            element?.classList.remove("border-b-3");

            // character info box
            elem.classList.remove('flex');
            elem.classList.add('hidden');
        });

        selectedItem(item.id);
    }

    function selectedItem(id: string) {
        // selected character
        const elem = document.querySelector(`[data-id='${id}']`);
        elem?.classList.remove('hidden');
        elem?.classList.add('flex');
        
        // selected character info box
        const element = elem?.querySelector(`div`);
        element?.classList.add("max-h-0");
        element?.classList.add("max-w-0");

        setTimeout(function(){
            // show borders on animation
            element?.classList.add("border-emerald-600");
            element?.classList.add("border-t-3");
            element?.classList.add("border-b-3");

            // increase height and with on animation
            element?.classList.add("max-w-96");
            element?.classList.add("max-h-60");
        }, 500);
    }


    return (
        <div className="flex flex-wrap flex-row justify-center items-center contrast-100 hover:contrast-150 cursor-pointer border border-amber-600 rounded-md overflow-hidden w-30 h-40 group hover:scale-115 transform transition-all" onClick={handleClick} >
            <img src={item.head_img} alt={item.name} className="w-full h-full object-cover z-0 group-hover" />
            <span className="bg-black/50 font-bold text-white z-10 relative bottom-10 w-full p-2 text-center group-hover">{item.name}</span>
        </div>
    );
};
export default SmallBox;