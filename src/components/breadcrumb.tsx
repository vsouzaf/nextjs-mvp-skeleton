"use client"

import {
    Breadcrumb as BreadcrumbUi,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {usePathname} from "next/navigation";
import React from "react";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Breadcrumb(prpos: BreadcrumbProps) {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    return (
        <BreadcrumbUi>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                {pathNames.length > 0 && <BreadcrumbSeparator/>}
                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={href}> {link}
                            </BreadcrumbLink>
                        </BreadcrumbItem></React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </BreadcrumbUi>
    )
}