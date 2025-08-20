type Character = {
    id       : string,
    name     : string,
    head_img : string
}

interface SmallBoxProps {
    item : Character;
}

function SmallBox({ item }: SmallBoxProps) { 
    // changes are applied on CenterImageList component item
    const handleClick = () => {
        // Hide all elements with data-id attribute
        // character info box
        document.querySelectorAll('[data-id]').forEach(elem => {
            elem.classList.remove('flex');
            elem.classList.add('hidden');
        });

        selectedItem(item.id);
    }

    // selected character
    function selectedItem(id: string) {
        const elem = document.querySelector(`[data-id='${id}']`);
        elem?.classList.remove('hidden');
        elem?.classList.add('flex');
    }

    return (
        <div className="flex flex-wrap flex-row justify-center items-center contrast-100 hover:contrast-150 cursor-pointer border border-amber-600 rounded-md overflow-hidden w-30 h-40 group hover:scale-115 transform transition-all" onClick={handleClick} >
            <img src={item.head_img} alt={item.name} className="w-full h-full object-cover z-0 group-hover" />
            <span className="bg-black/50 font-bold text-white z-10 relative bottom-10 w-full p-2 text-center group-hover">{item.name}</span>
        </div>
    );
};
export default SmallBox;