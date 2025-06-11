import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu"



export function Navigation() {
    return (
        <NavigationMenu >
            <NavigationMenuList>
                <NavigationMenuItem>
                 <NavigationMenuLink href="/#">
                        Home
                    </NavigationMenuLink>
                    
                  
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/#">
                        About
                    </NavigationMenuLink>
                    
                  
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/#">
                        Profile
                    </NavigationMenuLink>
                    
                  
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        
    )
}