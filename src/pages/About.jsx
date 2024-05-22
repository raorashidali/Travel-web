import React from "react";
 
import Location from "../components/Location/Location.jsx";
import BlogsCamp from "../commponents/Blogs/BlogsCamp";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p className="text-gray-700 text-lg font-normal leading-loose tracking-wide p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ducimus cupiditate quo harum officia perspiciatis hic ut sunt
            repudiandae, laboriosam expedita nostrum tempora, consectetur
            itaque, voluptate error aperiam corrupti ullam aspernatur a!
            Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
            ipsam hic numquam consequatur eius id eaque accusamus repudiandae
            impedit, quisquam non, harum inventore ratione? Tempora voluptatum
            ut eligendi corrupti esse, repellat nesciunt illum facilis officiis?
            Nisi quidem officiis asperiores nostrum ipsa maiores explicabo quia!
            Corporis provident asperiores fuga eligendi rem temporibus possimus
            autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab
            consectetur doloremque, velit a mollitia possimus quaerat!
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            suscipit minus similique aliquam recusandae quisquam id nulla
            tempora voluptate vero.
          </p>
          </p>
          <br />
           
        </div>
      </div>
      <Location />
      <BlogsCamp/>
      
    </>
  );
};

export default About;
