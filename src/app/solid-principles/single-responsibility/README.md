# Single Responsibility Principl (SRP) Example

This module demonstrates SRP using a banking fund transfer feature

- UI handled by. `TransferComponent` ( standalone)
- API cals handled by `TransferService`
- Input validation by `TransderValidator`
-Activity logging by `ActivityLoggerService`

Each class/component has a single responsibility and reason to change
Run the App with:
ng serve 
Navigate to `/transfer` route 