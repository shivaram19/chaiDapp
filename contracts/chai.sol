// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0 ;

contract chai{


    struct Memo{
        string name ;
        string message ;
        uint timestamp;
        address from ;
    }
    Memo[] memos;
    address payable owner;
    constructor() {
        owner = payable( msg.sender );
    }

    function buyChai( string memory name, string memory message ) external payable {
        require(msg.value>0,"payment can never be zero");
        owner.transfer( msg.value );
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}