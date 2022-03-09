
function Stack()
{
    this.arrStack = new Array();
    this.intIndex = 0;

    this.Size     = getSize;
    this.IsEmpty  = isStackEmpty;
    this.Push     = pushElement;
    this.Pop      = popElement;
    this.Get      = getElement;
    this.toString = dumpStack;
}

// Converts stack contents into a comma seperated string
function dumpStack()
{
    var intCntr = 0;
    var strRet  =  "";
    if (this.intIndex == 0) return null;
    for (intCntr = 0; intCntr < this.intIndex; intCntr++)
    {
        if (strRet.length == 0)
            strRet += this.arrStack[intCntr];
        else
            strRet += "," + this.arrStack[intCntr];
    }
    return strRet;
}

// Returns size of stack
function getSize()
{
    return this.intIndex;
}

// This method tells us if this Stack object is empty
function isStackEmpty()
{
	if (this.intIndex == 0)
		return true;
	else
		return false;
}

// This method pushes a new element onto the top of the stack
function pushElement(newData)
{
	// Assign our new element to the top
	debugAssert ("Pushing " + newData);
	this.arrStack[this.intIndex] = newData;
	this.intIndex++;
}

// This method pops the top element off of the stack
function popElement()
{
    var retVal;

    retVal = null;
    if (this.intIndex > 0)
    {
	   // Assign our new element to the top
	   this.intIndex--;
	   retVal = this.arrStack[this.intIndex];
	}
	return retVal;
}

// Gets an element at a particular offset from top of the stack
function getElement(intPos)
{
    var retVal;

    //alert ("Size : " + this.intIndex + ", Index " + intPos);
    if (intPos >= 0 && intPos < this.intIndex)
        retVal = this.arrStack[this.intIndex - intPos - 1];
    return retVal;
}
