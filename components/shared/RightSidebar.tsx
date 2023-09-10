export default function RightSidebar(){
    return (
        <section className="custom-scrollbar rightsidebar">

            {/*Suggested Communities section on the right side bar*/}
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
            </div>

            {/*Suggested Users section on the right side bar*/}
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
            </div>
            
        </section>
    );
    
}