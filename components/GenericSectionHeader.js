const GenericSectionHeader = ({ title, spot }) => {
    return (
        <div className="flex justify-between mt-2 mb-4">
            <div className="flex items-center">
                <h2 className="flex items-center pb-4 mb-2 font-black text-xl text-gray-700 relative">
                    {title}
                    <span className="absolute bottom-0 left-0 w-1/3 border-4 border-red-500"></span>
                </h2>
                {
                    spot ? <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
                        {spot}
                    </p> : ''
                }
            </div>
        </div>
    );
}

export default GenericSectionHeader;