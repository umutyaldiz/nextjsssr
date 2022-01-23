const GenericHeader = ({ title, spot }) => {
    return (
        <div className="text-left mt-3 mb-6">
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
            </h1>
            {
                spot ? <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
                    {spot}
                </p> : ''
            }
        </div>
    );
}

export default GenericHeader;