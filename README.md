# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!


# My feedback

I thought it was a good test proving basic knowledge in React. I was quite surprised about the fact that I couldn't change the build process which "forced" me to create .js files (not use typescript - I quite like it now) as well as not using Redux. However, I agree that with a simple exercise like this, as it was written it should take ~1h, Redux is not really needed.

These are thoughts I had while I was developing and things I could improve if I'd had more time:
- I could have extracted in another component "MenuBuilder" what was inside the App component so that if I need to display another component later on and modify the styling, this will be easier. I've not done it because it would add another "layer" from the children to the parent components to get the correct state.
- I could have modified the structure of the object Items inside the Menu in order to be able to select more than 1 same item (something like {id, name, dietaries, total}). I would need to modify the styling of the MenuPreview to allow it to show how many selected items there are.