

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Please insert a positive number.";
    } else {
        // 1 kilometer = 1000 meter
        var meter = 1000 * kilometer;
        return meter;
    }
}


function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Please insert a positive value for the product.";
    } else {
        // Cost of watch, mobile and laptop respectively 50, 100, 500
        var watchCost = 50 * watch;
        var mobileCost = 100 * mobile;
        var laptopCost = 500 * laptop;

        var totalBudget = watchCost + mobileCost + laptopCost;

        return totalBudget;
    }
}


function hotelCost(days) {

    var firstTenDays = 0;
    var secondTenDays = 0;
    var totalCost = 0;

    if (days < 0) {
        return "Input value cannot be negative.";
    } else {
        if (days > 10 && days < 21) {
            firstTenDays = 100 * 10;
            secondTenDays = 80 * (days - 10);
            totalCost = firstTenDays + secondTenDays;
        } else if (days > 20) {
            firstTenDays = 100 * 10;
            secondTenDays = 80 * 10;
            totalCost = firstTenDays + secondTenDays + (50 * (days - 20));
        } else {
            totalCost = 100 * days;
        }

        return totalCost;
    }
}


function megaFriend(friendList) {
    if (typeof friendList !== 'object') {
        return "Please input an array of name.";
    } else {
        //Declaration of a variable for array's first position to compare with other position
        var longestName = friendList[0];
        for (var i = 0; i < friendList.length; i++) {
            var friendName = friendList[i];
            if (friendName.length > longestName.length) {
                longestName = friendName;
            }
        }
        return longestName;
    }
}
