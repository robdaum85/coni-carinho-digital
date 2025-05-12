
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ColorPaletteDemo = () => {
  return (
    <div className="container px-4 py-12 bg-background">
      <h2 className="text-3xl font-dm-serif mb-8 text-center brush-title text-primary">
        New Color Palette
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Primary Color</CardTitle>
            <CardDescription className="text-text-secondary">Hex: #f58f9c</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-24 bg-primary rounded-md flex items-center justify-center text-white">
              Primary Background
            </div>
          </CardContent>
          <CardFooter>
            <Button className="mr-2">Primary Button</Button>
            <Button variant="outline" className="border-primary text-primary">Outline Button</Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-white border-secondary/20">
          <CardHeader>
            <CardTitle className="text-secondary">Secondary Color</CardTitle>
            <CardDescription className="text-text-secondary">Hex: #efc3c2</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-24 bg-secondary rounded-md flex items-center justify-center text-foreground">
              Secondary Background
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="mr-2">Secondary Button</Button>
            <Badge className="bg-secondary text-foreground">Badge</Badge>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white border-accent/20">
          <CardHeader>
            <CardTitle className="text-accent-foreground">Accent Color</CardTitle>
            <CardDescription className="text-text-secondary">Hex: #fff1f0</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-16 bg-accent rounded-md flex items-center justify-center text-foreground">
              Accent Background
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Background Color</CardTitle>
            <CardDescription className="text-text-secondary">Hex: #f9f9ee</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-16 bg-background rounded-md flex items-center justify-center border">
              Background Color
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Text Secondary Color</CardTitle>
            <CardDescription className="text-text-secondary">Hex: #63605d</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-16 bg-white rounded-md flex items-center justify-center border text-text-secondary">
              This text uses the text-secondary color
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;
