// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Donation - minimal donation contract
/// @author PavlenkoTM
contract Donation {
    address public owner;

    event Donated(address indexed donor, uint256 amount);
    event Withdrawn(address indexed owner, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    /// @notice Accepts plain ETH transfers and emits a Donated event
    receive() external payable {
        require(msg.value > 0, "No ETH sent");
        emit Donated(msg.sender, msg.value);
    }

    /// @notice Owner withdraws the entire balance
    function withdraw() external {
        require(msg.sender == owner, "Not the owner");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds");
        (bool ok, ) = payable(owner).call{value: balance}("");
        require(ok, "Transfer failed");
        emit Withdrawn(owner, balance);
    }

    /// @notice Read contract balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
