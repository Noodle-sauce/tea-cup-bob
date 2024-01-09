// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract chai {
    address payable owner;

    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] public memos;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(
        string calldata name,
        string calldata message
    ) external payable {
        require(msg.value > 0, "Insuficiant funds!");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
