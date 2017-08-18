/********* storeapp.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface storeapp : CDVPlugin {
  // Member variables go here.
}

- (void)check:(CDVInvokedUrlCommand*)command;
- (void)start:(CDVInvokedUrlCommand*)command;
- (void)go:(CDVInvokedUrlCommand*)command;

@end