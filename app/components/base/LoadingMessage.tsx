export default function LoadingMessage() {
    return (
        <div className="flex flex-col items-center justify-center my-8">
            <span className="text-muted-foreground text-xl">Carregando...</span>
            <div
                className={`
                    m-auto mt-5 inline-block h-8 w-8 animate-spin rounded-full border-4 
                    border-solid border-current border-r-transparent align-[-0.125em] 
                    motion-reduce:animate-[spin_1.5s_linear_infinite] text-gray-500
                    
                    `}
                role="status"></div>
        </div>
    )
}