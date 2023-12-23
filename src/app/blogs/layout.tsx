import { FooterPage } from "./_components/footer";

const BlogsPage = ({
    children
}:{
    children:React.ReactNode
}) => {
    return ( 
        <div className="bg-black text-white min-h-screen mx-auto overflow-x-hidden overflow-y-hidden">
            {children}
            <FooterPage/>
        </div>
    );
}
 
export default BlogsPage;