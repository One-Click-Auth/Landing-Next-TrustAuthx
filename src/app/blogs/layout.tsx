import { FooterPage } from "./_components/footer";

const BlogsPage = ({
    children
}:{
    children:React.ReactNode
}) => {
    return ( 
        <div className="bg-black text-white min-h-screen max-w-7xl mx-auto overflow-hidden">
            {children}
            <FooterPage/>
        </div>
    );
}
 
export default BlogsPage;