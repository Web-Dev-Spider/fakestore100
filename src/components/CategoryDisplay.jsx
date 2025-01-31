import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function CategoryDisplay({ items, itemCategory = "test" }) {


    return (
        <div>
            <h3 className="text-xl font-semibold text-center  md:text-3xl md:font-semibold md:text-center md:mb-4">{itemCategory}</h3>
            <div className="flex flex-wrap bg-slate-200 mb-4 justify-center">
                {items.map((item) => (
                    <div className="m-2" key={item.id}>
                        <ProductCard product={item} key={item.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryDisplay;
