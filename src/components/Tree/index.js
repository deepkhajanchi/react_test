import React, { useState } from "react";

const Tree =({ data=[] }) =>{
    return (
        <div>
            <ul>
                {data.map((tree)=>(
                    <div>
                        <TreeNode node= {tree}/>
                    </div>
                ))}
            </ul>
        </div>
    )
};

const TreeNode =({node})=>{
    const [childVisibility, setChildVisibility]= useState(false);
    const hasChild= node.children ? true : false;
    return (
        <li>
            <div onClick={(e) => setChildVisibility((v) => !v)}>
                {hasChild && (
                    <div className={`d-inline d-tree-toggler ${
                        childVisibility ? "active" : ""
                    }`}>
                        Icon
                    </div>
                )}

                <div>
                    <i className={`${node.icon}`}>
                        {node.label}
                    </i>
                </div>
            </div>

            {hasChild && childVisibility && (
                <div>
                    <ul>
                        <Tree data={node.children}/>
                    </ul>
                </div>
            )}
        </li>
    );
};

export default Tree;
