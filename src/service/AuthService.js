
export const fetchDataFromBackend = async () => {
    try {
        const response = await fetch('http://localhost:8080/auth/ping');

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
