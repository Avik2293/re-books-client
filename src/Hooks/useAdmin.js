import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            // fetch(`https://re-books-server.vercel.app/users/${email}`)
            fetch(`https://re-books-server.vercel.app/users/?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.role);
                    if (data.role === "Admin") {
                        setIsAdmin(true);
                    }
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]

}

export default useAdmin;