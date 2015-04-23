// algo hastily modified from 
// http://stackoverflow.com/a/5904945/3879
// thanks to panicsteve for linking it

walkAndReplace(document.body);

function walkAndReplace(node) 
{
  switch(node.nodeType)  
  {
  	// containers
    case 1:
    case 9:
    case 11: 
      var child = node.firstChild;
      while(child) 
      {
	      var next = child.nextSibling;
	      walkAndReplace(child);
	      child = next;
      }
      break;

    // found the text node
    case 3:
      var val = node.nodeValue;
      // "cringe" abusers can be sneaky with their typos
      val = val.replace(/cringe?ing|cringe?\-ing/ig, 'pooping');
      // try to catch all "cringe-worthy" and "cringe-inducing"
      val = val.replace(/cringe? *-* *(?:wort\w*|wroht\w*|worh\w*|indu\w*|y(?=\W|$))/ig, 'poop-my-pants-inducing');
      val = val.replace(/so much cringe/ig, 'I have always disliked cute animals.');
      // now let's catch standalone "cringe"s
      val = val.replace(/cringe?|crnige?|crigne?/ig, 'poop my pants');
      node.nodeValue = val;
      break;
   }
}
