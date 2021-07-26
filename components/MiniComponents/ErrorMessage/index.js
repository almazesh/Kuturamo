import { useMemo } from "react"

export default function ErrorMessage({errors, field}){
    const checkError = useMemo(() => {
        const isError = key => {
            return key.field === field
        }
        
        return errors?.find(isError)?.message;

    }, [errors, field])

    return <span>{checkError}</span>
}