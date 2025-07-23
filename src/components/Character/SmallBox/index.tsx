interface SmallBoxProps {
    name  : string;
    image : string;
}

function SmallBox({ name, image }: SmallBoxProps) { 
    return (
        <div className="flex flex-wrap flex-row justify-center items-center cursor-pointer border border-amber-600 rounded-md overflow-hidden w-40 h-60 group hover:scale-115 transform transition-all" >
            <img src={image} alt={name} className="w-full h-full object-cover z-0 group-hover" />
            <span className="bg-black/50 font-bold text-white z-10 relative bottom-10 w-full p-2 text-center group-hover">{name}</span>
        </div>
    );
};
export default SmallBox;