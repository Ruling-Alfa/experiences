import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailService {

  constructor(private http: HttpClient) { }

  GetBlogDetail(id: number): string{
    const detail:string = `<div class="jumbotron">
    <h1 class="display-4">SOLID Principles</h1>
    <p class="lead">A detailed guide to doing solid principles in code</p>
    <hr class="my-4">
    <p>A cople of days back I hand an interview conding round and my feedback came back saying that my SOLID principles were not as expected and that my code lacked opne/close implementation.
    </p>
    <p> I thought why not lets start writing a blog about it while also studying what were my mistakes. So here it goes folks, my first experience....
    </p>
    <p>SOLID is an acronym for 5 object oriented principles by uncle BOB. This principles were found to improve the entendibility and the maintainability of a project as it grows with time. Following these practices starting from the begining of the
        project will reduce the chances of code refactoring and avoids the induction of code smells (We will talk about code smells in another experience blog).
    </p>
    <p>SOLID stands for:</p>
    <blockquote class="blockquote">
        <ul>
            <li><strong>S</strong>ingle responsibility</li> - Single responsibility states that a class shall have only one responsibility
            <li><strong>O</strong>pen/Close</li> - Entities / class objects shall be open for extension but closed for modification
            <li><strong>L</strong>iskov substitution</li> - Objects of a super class can be replaced by objects of subclass without breaking the application
            <li><strong>I</strong>nterface segregation</li> - A Client should never be exposed to the methods that it doesn't needs
            <li><strong>D</strong>ependency injection</li> - Higher level modules should not depend on lower level modules, both should depend on abstraction.
        </ul>
    </blockquote>
    <br><br>

    <div id="singleResponsibility">
        <h3>
            <strong>S</strong>ingle responsibility
        </h3>
        <p>A class shall do only small amount of related work. In simple words a class shall be made as small as possible that it will encompass only that which is related to it. If a class grows in size, the first thing to question yourself is that
            can the functionality that it takes care of be moved to another class. If yes, it probably should be moved to a different class. Having said htat, it is not always true. In many cases the class my be lage enough and still be following
            single responsibility principle. In all a class shall have only 1 responsibility and 1 behaviour.
        </p>

        <p>For instance lets say that we have a class for an Employee that has few properties to store the state of the object. It also has 2 methods:
            <var>CalculateSalary</var> that calculates the employees salary and
            <var>ValidateEmail</var> that validatest he email of the employee
        </p>
        <pre class="pre-scrollable border rounded bg-light" ng-non-bindable>
            <code ng-non-bindable>
    public class Employee
    &#123;
        public int EmployeeId &#123; get; set; &#125;
        public string? Name &#123; get; set; &#125;
        public string? Email &#123; get; set; &#125;
        public double Salary &#123; get; set; &#125;
        public double CalculateSalary(int hours)
        &#123;
            return this.Salary * hours;
        &#125;
    
        public bool ValidateEmail()
        &#123;
            var isValid = false;
            if (this.Email is not null)
            &#123;
                var emailRegEx = new Regex(@&#x22;^([\w -] + (?:\.[\w-]+)*)@((?:[\w -] +\.)*\w[\w -]&#123; 0,66&#125;)\.([a - z]&#123; 2,6&#125; (?:\.[a-z]&#123; 2&#125;)?)$/ i&#x22;);
                isValid = emailRegEx.IsMatch(this.Email);
            &#125;
            return isValid;
        &#125;
    
    
    &#125;
            </code>
        </pre>

        <p>This may look good at first glance, but if we try to understand the need of Validate Email in the class, it becomes pretty clear that this is an extra behaviour and shall be moved out of the class into some other class. Moving this part out
            of the employee class also makes it more reusable in other parts of the project wherever email and email validation is required.
        </p>
        <p>The improved code looks like the one below</p>

        <pre class="pre-scrollable border rounded bg-light" ng-non-bindable>
            <code ng-non-bindable>
    public class Employee
    &#123;
        public int EmployeeId &#123; get; set; &#125;
        public string? Name &#123; get; set; &#125;
        public Email? Email &#123; get; set; &#125;
        public double Salary &#123; get; set; &#125;
        public double CalculateSalary(int hours)
        &#123;
            return this.Salary * hours;
        &#125;
    &#125;

    public class Email
    &#123;
        public string? EmailId &#123; get; set; &#125;

        public bool ValidateEmail()
        &#123;
            var isValid = false;
            if (this.EmailId is not null)
            &#123;
                var emailRegEx = new Regex(@"^([\w -] + (?:\.[\w-]+)*)@((?:[\w -] +\.)*\w[\w -]&#123; 0,66&#125;)\.([a - z]&#123; 2,6&#125; (?:\.[a-z]&#123; 2&#125;)?)$/ i");
                isValid = emailRegEx.IsMatch(this.EmailId);
            &#125;
            return isValid;
        &#125;
    &#125;
            </code>
        </pre>
    </div>
    <!-- <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>  -->

    <p>Some people also believe that Single responsibility and open/close principle are the same things</p>


    <div id="openClose">
        <h3>
            <strong>O</strong>pen/Close principle
        </h3>
        <p>A class once implemented, shall be open for extension or for addition of further more features but shall be closed for modification in the implementation. Meaning, any logic shall not be changes to accomodate more features. Of-course bug fixes
            and refactoring is allowed.
        </p>

        <p>For instance lets say that we have a class for <var>Notifications</var> and it contains logic for sending email every time salary for an employee is deposited to their account.
        </p>
        <pre class="pre-scrollable border rounded bg-light" ng-non-bindable>
            <code ng-non-bindable>
        public class Notifications
        &#123;
            public string? EmailId &#123; get; set; &#125;
        
            public void sendEmail()
            &#123;
                //some logic to send email
            &#125;
        &#125;
            </code>
        </pre>

        <p>Now lets say that the requirements were refined and a new feature was introduced where we also send an SMS on employee phone. Lets add the same code to our class. The first thing that comes to mind is to add an if condition and get it done.
        </p>

        <pre class="pre-scrollable border rounded bg-light" ng-non-bindable>
            <code ng-non-bindable>
        public class Notifications
        &#123;
            public string? EmailId &#123; get; set; &#125;
            
            public string? Mobile &#123; get; set; &#125;
        
            public void NotifyUser()
            &#123;
                if (this.EmailId is not null)
                    this.SendEmail();
                if (this.Mobile is not null)
                    this.SendSMS();
            &#125;
            
            private void SendEmail()
            &#123;
                //some logic to send email
            &#125;
            
            private void SendSMS()
            &#123;
                //some logic to send sms
            &#125;
        &#125;
            </code>
        </pre>

        <p>Further more notifications via push notifications on mobile app is added. We again have to go and modify the class <var>Notifications</var>. This means that we are constantly modifying the class to add new and new features. A better approach
            to this would be to move this all out of the <var>Notifications</var> class and just have the trigger there to fire the notifications. For this we will use inheritance and polymorphism.
        </p>

        <pre class="pre-scrollable border rounded bg-light" ng-non-bindable>
            <code ng-non-bindable>
        public class Notifications
        &#123;
            public void NotifyUser(INotificationTypes notificationTypes)
            &#123;
                notificationTypes.SendNotification();
            &#125;
        &#125;
        
        public interface INotificationTypes
        &#123;
            public void SendNotification();
        &#125;

        public class Email : INotificationTypes
        &#123;
            public string? EmailId &#123; get; set; &#125;
        
            public void SendNotification()
            &#123;
                if (this.EmailId is not null)
                &#123;
                    //some logic to send email
                &#125;
            &#125;
        &#125;
        
        public class SMS : INotificationTypes
        &#123;
            public string? Mobile &#123; get; set; &#125;
        
            public void SendNotification()
            &#123;
                if (this.Mobile is not null)
                &#123;
                    //some logic to send sms
                &#125;
            &#125;
        
        &#125;
        
        public class PushNotification : INotificationTypes
        &#123;
            public string? DeviceId &#123; get; set; &#125;
        
            public void SendNotification()
            &#123;
                if (this.DeviceId is not null)
                &#123;
                    //some logic to send push notification to mobile devices
                &#125;
            &#125;
        
        &#125;
            </code>
        </pre>
        <p>Here we can easily add more and more types of notifications by inheriting the <var>INotificationTypes</var> interface and trigger them using the <var>Notifications</var> class object. It becomes pretty clear by using the inheritance and polymorphism
            that the instance of class implementing interface will be available to the <var>Notification</var> class to send notifications, without even considering the actual implementation. This lets us create infinitely many classes and implementations
            for adding many new notification types to be handled.</p>
    </div>
    To be Continued ...
</div>`;

    return detail;
  }
}
