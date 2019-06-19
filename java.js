/////Thể tích hình cầu
function Volume(r) 
{
return 4/3*3.14*(r*r*r);

}

//////////////////Tính tổng các số nằm giữa 2 số
function Sumbetweentwonumber(a,b)
{
	var tong = 0;
	if(a < b)
	{
	for (let i = a + 1; i < b; i++)
	{
		tong += i;
	}
	}
	else	
	{
	}
	return tong;
}
//////////////////// Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function Prime(x)
{
	var ketqua = false;
	if (x < 2) 
	{
	return	ketqua;
	}
	else if(x == 2 || x == 3)
	{
		ketqua = true;
		return ketqua;
	}
	else if(x%2 == 0)
	{
		return ketqua;
	}
	else
	{
		for (let i = 3; i < x; i+=2)
		{
			if (x%i == 0) 
			{
				ketqua;
				break;
			}

			else
			{
				ketqua = true;				
			}
		}
	return ketqua;
	}

}
//////////////Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function Sumprimelessx(x)
{
	var tong = 0;
	if (x == 1) 
	{
		tong = 1;
		return tong;
	}
	else
	{
		for(let i = 2; i <= x; i++)
		{
			if(Prime(i) == true)
			{
				tong += i;
			}
		}
		return tong;
	}
}
////////////////////// Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó
function Uoc(x)
{
	var tong = 0;
for (let i= 1; i <=x; i++)
{
	if(x%i == 0)
	{
		tong+=i;
	}

}
return tong;
}
////////////////////////Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy Fibonacci (0, 1, 1, 2, 3, 
//5, 8, ...) mà nhỏ hơn hoặc bằng tham số truyền vào.
function Fibonacci(x)
{
	var arr = [0,1];
	var tong = 0;
	var max = Math.max.apply(Math, arr);
	if (x == 1) 
	{
		arr = [0,1,1];
		tong = 3; 
		return tong;
	}
	else	
	{
		for(let i = 2; i < x ;i++)
		{
		arr[i] = arr[i-1] + arr[i-2];
		arr;
		if(max <= x)
		{
			console.log(i)
		break;	
		}
		}
	}
}
//////////////////////////Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ
function Chuyenchuoi(x) 
{
	var kq = "";
for(let i= 0; i < x.split(" ").length; i++)
{
var b = x.split(" ")[i].slice(0,1).toUpperCase() + x.split(" ")[i].slice(1)
kq += b + " ";
}
return	kq.trim();
}
//////////////////////////////Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case
function Chuyenchuoi2(x) 
{
x = x.toLowerCase().replace(/ /gi,"-")
return x;
}
///Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong 
//chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không
function Sosanh(x,y) 
{
x = x.toLowerCase()
y = y.toLowerCase()
var arrx = x.split("")
var arry = y.split("")
var moi = "";
for (let i = 0; i < arry.length; i++)
{
	for (j = 0; j < arrx.length; j++)
	{

		if(arry[i] == arrx[j])
		{
					moi += arrx[j];
		}
	}
}
var kqq = true;

if (moi == y) 
{
	return kqq;
}
else
{
	kqq = false;
	return kqq;
}
}
////////Cho 1 object. Viết hàm kiểm tra xem object đó có phải là object rỗng hay không (không có thuộc 
//tính nào). Kết quả trả về true hoặc false.
function checkOb(x)
{
	if(Object.keys(x).length == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}