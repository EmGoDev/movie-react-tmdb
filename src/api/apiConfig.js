const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b5189cc214b13f549c90ce72dc6d4a6f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;