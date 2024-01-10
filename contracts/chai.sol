// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract chai {
    address payable public owner;

    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] public memos;

    event MemoAdded(string indexed name, address indexed from, uint timestamp);
    event FundsWithdrawn(address indexed owner, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(
        string calldata name,
        string calldata message
    ) external payable {
        require(msg.value > 0, "Insufficient funds sent with the transaction");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
        emit MemoAdded(name, msg.sender, block.timestamp);
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    // function withdrawAllFunds() external onlyOwner {
    //     uint contractBalance = address(this).balance;

    //     require(contractBalance > 0, "No funds to withdraw");

    //     owner.transfer(contractBalance);
    //     emit FundsWithdrawn(owner, contractBalance);
    // }
}
