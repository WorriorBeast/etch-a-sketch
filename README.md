# etch-a-sketch

This will be a hybrid between a sketchpad and an etch-a-sketch. User will be allowed to decide
the size of the grid and draw as they please.

This will be the first project to test my DOM manipulation and event skills.

Objectives:

1. Create a button that allows the user to enter an integer from 1 and 100.
2. After the user enters the size for the new grid, the previous grid must be replaced with the new grid.
3. Depending on the integer the user inputs, the individual grid node must automatically adjust their size 
   to fill the parent node container.

Optional:

1. Give a random color to a individual grid node once.
2. On each interaction the color will get darker by 10% from the initial color. By the tenth interaction, it will
   be black.

For the most part I completed each primary objective with ease. I did have to go back to the DOM manipulation and 
events lesson for syntax and/or search for the specific dom method needed. Even the first optional objective was
straightforward. 

When it comes to the second optional objective it became very challenging. I wasn't able to get the color darkness 
to decrement by 10% of the initial color. Instead, the color darkens by 10% from the new color. The color will get 
dark, but never black unless a person spends an insanely amount of time darkening it. Don't recommend. I tried to 
store the initial color value using the bind() method and objects. Before this I had no knowledge of bind() and 
how to create variables containing objects. Perhaps this didn't work because I was making an error somewhere, 
allowing the initial color value to get overwritten with the new color value.

I also found that events cannot return a value. I tried to return the color value when the event with once 
assigned a random color, but that didn't work. I searched online to see how I could extract a value from an 
event. It's possible, but with a certain method. After following the examples, I was still unable to extract.

I did come up with a way to darken the color by 10%, but for the sake of the page I decided not to. It would crash 
the page if I opened the DOM tree. I don't think it's a great idea to implement something that would crash the 
page from just inspecting the DOM tree. This method would be creating a div for each individual grid piece that 
would completely fill the parent node and assign an initial value of black with alpha of 0. The child node would 
overlap the parent node with the color. Every interaction, the child node would increase the alpha by .1. When 
taking into consideration that the biggest grid size allowed is 100 x 100. With the overlapping child node, This 
will create a maximum of 20,000 nodes inside of the grid container assuming every node is colored. I noticed the 
more nodes in a grid, the greater the lag in the event listener. 20,000 nodes would definitely make the lag worse.