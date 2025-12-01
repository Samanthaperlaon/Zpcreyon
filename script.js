function navigate(pageId) {
    // 1. Get all elements with the class 'page'
    const pages = document.querySelectorAll('.page');
    
    // 2. Loop through them and remove the 'active' class (hiding them)
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 3. Find the specific page we want to show and add 'active'
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

}function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}
